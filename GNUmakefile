.DEFAULT_GOAL := all
BEM := ./node_modules/.bin/bem

%::
	node bicycle.js pages/anketa/anketa.src.js
	$(BEM) make $@

.PHONY: clean
clean::
	$(BEM) make -m clean
