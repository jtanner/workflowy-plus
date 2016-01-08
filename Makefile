default:
	mkdir -p dist
	npm run build
	cp manifest.json dist/
	cp -R src/images dist/
