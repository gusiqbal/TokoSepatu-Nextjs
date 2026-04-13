# =============================================================================
# Stage 1 — base: shared node version & working directory
# =============================================================================
FROM node:22-alpine AS base
WORKDIR /app

# Install libc compat for native binaries on Alpine
RUN apk add --no-cache libc6-compat

# =============================================================================
# Stage 2 — deps: install ALL dependencies (needed for build)
# =============================================================================
FROM base AS deps

COPY package.json package-lock.json* ./

RUN npm ci --frozen-lockfile

# =============================================================================
# Stage 3 — builder: compile the Next.js application
# =============================================================================
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build args injected at image build time (baked into the static bundle)
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# =============================================================================
# Stage 4 — runner: minimal production image
# =============================================================================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user and group for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy only what Next.js standalone output needs
COPY --from=builder /app/public          ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static     ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=10s --start-period=20s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
