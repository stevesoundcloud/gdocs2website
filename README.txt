


==========

gcloud cli notes


switch projects
    gcloud config set project <projectname>

list all apis
    gcloud services list --available

enable api
    gcloud services enable cloudfunctions.googleapis.com

deploy hello
    gcloud beta functions deploy helloGET --source src/hello --trigger-http

hello trigger is at location
    https://<region>-<projectname>.cloudfunctions.net/helloGET