
WRAPER=wraper.yml
UID=$(shell id -u)
GID=$(shell id -g)

init:
	echo "wraper:" > $(WRAPER)
	echo '    user: "$(UID):$(GID)"' >> $(WRAPER)
	echo '    environment:' >> $(WRAPER)
	echo '        HOME: /tmp' >> $(WRAPER)

serve: init
	docker-compose up
