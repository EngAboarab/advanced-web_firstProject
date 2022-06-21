# advanced-web_firstProject


## Usage
this server will listen to your request where it is used for allows you to place images into your frontend with the size 
set via URL parameters (and additional stylization if you choose) for rapid prototyping

## scripts:
 ```npm run test ```: to run jasmine unit testing
 ```npm run start```: to run build and start the server


## server
https://localhost:3000

## EndPOint for resizing

https://localhost:3000/api/images

## expected query parameters

  - filename: should be from avaliable files in the assets/full folder , if not please add the required file first 
  - width: should be a valid integer number
  - height: should be a valid integer number
  
  
  
  ## demonstration 
  using the following url 
  https://localhost:3000/api/images/filename=fjord&width=200&height=200
  
  will create a thumbnail for the existing fjord.jpg file and render it in the front end
  and in case of refreshing the page it will be rendered faster since it will be via the casched version of the file that
  was created on the assets/thumb folder 
