# Todo

### Screenshot

<!-- ![image](https://user-images.githubusercontent.com/77357735/218335818-e3a57d74-7b96-4a05-8dac-feb90a3f0a0d.png) -->

### Configuration

Clone this repository.
````
git clone https://github.com/smhabibjr/Pexels-Clone.git
````

````
cd Pexels-Clone
````

### Run

To run this application you don't need to install ruby or ruby on rails on your local machine. Because this project has been configured with a docker file. Just you have to have docker installed on your local machine.

To build a docker image. Open the terminal from your project directory.
````
docker build . -t my_pexels_clone
````
Build and Run the container.
````
docker run -p 3000:3000 my_pexels_clone
````
After running the container. Go to the browser and curl http://localhost:3000
