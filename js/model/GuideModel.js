function GuideModel(GuideId, GuideName, GuideAddress, GuideAge, GuideGender, GuideContactNo, GuideImage, GuideNICImage, GuideIDImage, GuideExperience, GuideManDayValue, GuideRemarks) {
    var __guideId = GuideId;
    var __guideName = GuideName;
    var __guideAddress = GuideAddress;
    var __guideAge = GuideAge;
    var __guideGender = GuideGender;
    var __guideContactNo = GuideContactNo;
    var __guideImage = GuideImage;
    var __guideNICImage = GuideNICImage;
    var __guideIDImage = GuideIDImage;
    var __guideExperience = GuideExperience;
    var __guideManDayValue = GuideManDayValue;
    var __guideRemarks = GuideRemarks;

    this.getGuideId = function (){
        return __guideId;
    }
    this.setGuideId = function (newGuideId) {
        __guideId = newGuideId;
    }
    this.getGuideName = function (){
        return __guideName;
    }
    this.setGuideName = function (newGuideName) {
        __guideName = newGuideName;
    }
}
