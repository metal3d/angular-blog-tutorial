
WRAPER=wraper.yml
UID=$(shell id -u)
GID=$(shell id -g)

serve: init
	docker-compose up

init:
	echo "wraper:" > $(WRAPER)
	echo '    user: "$(UID):$(GID)"' >> $(WRAPER)
ifdef http_proxy
	echo '    environment:' >> $(WRAPER)
	echo '        http_proxy: $(http_proxy)' >> $(WRAPER)
	echo '        https_proxy: $(http_proxy)' >> $(WRAPER)
	echo '        HTTP_PROXY: $(http_proxy)' >> $(WRAPER)
	echo '        HTTPS_PROXY: $(http_proxy)' >> $(WRAPER)
endif

install: init
	docker-compose run --rm blog npm install
	docker-compose run --rm blog bower install

