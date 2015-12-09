
WRAPER=wraper.yml
UID=$(shell id -u)
GID=$(shell id -g)

init:
	echo "wraper:" > $(WRAPER)
	echo "    user: $(UID):$(GID)" >> $(WRAPER)

serve: init
	docker-compose up