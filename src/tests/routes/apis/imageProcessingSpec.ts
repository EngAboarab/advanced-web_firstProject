import imageProcessing from "../../../routes/apis/imageProcessing";



describe(`testing the image processing functionality`,()=>{
    it('it sould return the resized file path',()=>{
    
        expect(imageProcessing("fjord","200","200")).not.toBeNull
    })
})
