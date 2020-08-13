install:
	npm install
install-ci:
	npm ci
lint:
	npx eslint .
brain-even:
	node bin/even.js
brain-calc:
	node bin/calc.js
brain-gcd:
	node bin/gcd.js
brain-progression:
	node bin/progression.js
brain-prime:
	node bin/prime.js
publish:
	npm publish --dry-run
