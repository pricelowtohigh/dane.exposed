Backend Repo for dane.exposed

## PLANS

### API ROUTES

dane.exposed/images
    - Will allow both GET and POST requests
    - Allows users to upload any image (within certain size/dimension contraints) (perhaps this will be its own page/route)
    - Displays a random image from the pool of user-uploaded images
    - Clicking on an image will roll a new random image

dane.exposed/images/:image_id
    - Will display a single image
    - Clicking on image will load a random 'image_id'

dane.exposed/images/all
    - Will load all images on a single page
    - Scalable, on desktop images will be displayed as a grid, on mobile it will be a single column

dane.exposed/messages
    - Will allow GET and POST requests
    - Allows users to upload any message (within a character length restraint)
    
dane.exposed/messages/all
    - Will display every message

dane.exposed/messages/message_id
    - Will display a random message
    - Clicking on a message loads a new random message


## Database

Image data object format:
[
    {
        'image_id': image_id,
        'URL': URL,
        'created_at': timestamp
    }
]