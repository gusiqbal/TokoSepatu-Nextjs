NPM = npm

.PHONY: dev build start install lint help

dev:
	$(NPM) run dev

build:
	$(NPM) run build

start:
	$(NPM) run start

install:
	$(NPM) install

lint:
	$(NPM) run lint

help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "  dev      Start Next.js development server"
	@echo "  build    Build for production"
	@echo "  start    Start production server (requires build first)"
	@echo "  install  Install dependencies"
	@echo "  lint     Run ESLint"
