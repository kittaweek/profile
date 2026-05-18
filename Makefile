.PHONY: install dev build preview audit docker-build docker-up docker-down

install:
	yarn install

dev:
	yarn dev

build:
	yarn build

preview:
	yarn preview

audit:
	yarn audit --level moderate

docker-build:
	docker compose build

docker-up:
	docker compose up -d site

docker-down:
	docker compose down
