default:
	mkdir -p dist
	npm install
	npm run build
	cp manifest.json dist/
	cp -R src/images dist/
	mkdir -p dist/lib
	cp node_modules/domtastic/domtastic.min.js dist/lib/
