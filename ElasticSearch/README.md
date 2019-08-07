#### Docker hub
> 地址: https://www.elastic.co/guide/en/elasticsearch/reference/6.4/docker.html

#### Pulling the image
> docker pull docker.elastic.co/elasticsearch/elasticsearch:6.4.3

#### Running ElasticSearch For the Command Line
> docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.4.3

