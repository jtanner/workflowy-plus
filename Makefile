default:
	mkdir -p dist
	npm install
	npm run build
	cp manifest.json dist/
	cp -R src/images dist/
