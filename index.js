exports.responseGen= class ResponseGenerator{

    constructor(configArgs={}){
        let sample_configArgs={
            "ver":"0.0.1",//[]
            "timestamp":true,//[true,false]
            "hide_status":false,
            "customResponseCodesFilePath":"core/config/respnsecodes.json",//external/business codes path 
        };
    
        this.default_configArgs={
            "ver":null,
            "timestamp":false,
            "hide_status":true,
            "customResponseCodesFilePath":null
        };
    
        //preparing version
        this.ver = configArgs.ver || this.default_configArgs.ver;
        
        //preparing timestamp
        this.ts= (configArgs.timestamp==false) ? this.default_configArgs.timestamp :Date.now(); 
    
        //preparing hide_status
        this.hide_status= configArgs.hide_status ? true : this.default_configArgs.hide_status;
        
        //preparing customResponseCodesFilePath 
        this.hide_status= configArgs.customResponseCodesFilePath ? configArgs.customResponseCodesFilePath : this.default_configArgs.customResponseCodesFilePath;    
    
    }

    res(resObj) {
        // preparing response
        let response={};
        if(this.ver) response.ver=this.ver; 
        if(this.ts) response.timestamp=this.ts; 
        if(this.hide_status) response.status="success"; 
    
        return response;
        
    }


}

// export {ResponseGenerator};
