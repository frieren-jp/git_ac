.PHONY: lint test start

lint:
	cd src && npm run lint

test:
	cd src && npm test

start:
	cd src && npm start
