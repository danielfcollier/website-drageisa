.PHONY: all install lock-update dev start build build-dev lint preview clean help

# Default target when running 'make' - usually builds the production artifact
all: build

# -----------------
# COMMAND HELPERS
# -----------------

help:
	@echo "--------------------------------------------------------"
	@echo "Available Commands (make <command>):"
	@echo "--------------------------------------------------------"
	@echo "DEPENDENCY MANAGEMENT:"
	@echo "  install       - Installs all dependencies and updates bun.lockb (bun install)"
	@echo "  lock-update   - Alias for 'install'"
	@echo ""
	@echo "DEVELOPMENT:"
	@echo "  dev           - Starts the local development server (npm run dev)"
	@echo "  start         - Alias for 'dev'"
	@echo ""
	@echo "BUILD:"
	@echo "  build         - Builds the project for production (npm run build)"
	@echo "  build-dev     - Builds the project in development mode (npm run build:dev)"
	@echo "  preview       - Serves the production build locally (npm run preview)"
	@echo ""
	@echo "UTILITIES:"
	@echo "  lint          - Runs the linter (npm run lint)"
	@echo "  clean         - Removes the 'dist' build directory (rm -rf dist)"
	@echo ""
	@echo "OTHER:"
	@echo "  help          - Shows this help message"
	@echo "  all           - Default target; runs 'make build'"
	@echo "--------------------------------------------------------"

# -----------------
# DEPENDENCY MANAGEMENT
# -----------------

# Installs all dependencies using bun (updates bun.lockb if it is outdated)
install:
	@echo "Running bun install to fetch and synchronize dependencies..."
	bun install

# Explicitly named target for updating the lock file (same as install)
lock-update: install

# -----------------
# DEVELOPMENT
# -----------------

# Starts the local development server (npm run dev)
dev:
	@echo "Starting Vite development server..."
	npm run dev

# Alias for the development server
start: dev

# -----------------
# BUILD
# -----------------

# Builds the project for production (npm run build)
build:
	@echo "Building project for production..."
	npm run build

# Builds the project specifically in development/staging mode (npm run build:dev)
build-dev:
	@echo "Building project in development mode..."
	npm run build:dev

# -----------------
# UTILITIES
# -----------------

# Runs the linter (npm run lint)
lint:
	@echo "Running ESLint..."
	npm run lint

# Previews the production build locally (npm run preview)
preview:
	@echo "Previewing production build locally..."
	npm run preview

# Clean up build artifacts (optional, but very useful)
clean:
	@echo "Cleaning up 'dist' directory..."
	rm -rf dist