default:
	mkdir -p dist
	npm run build
	cp manifest.json dist/
