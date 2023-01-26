export const Category_list = (cat_enum:any) => {
    switch(cat_enum){
        case "0": return "ALL";
        case "1": return "IT";
        case "2": return "MARKETING";
        case "3": return "HR";
    }
};

export const civilServices_list = (cat_enum:any) => {
    switch(cat_enum){
        case "0": return "Civil Services";
        case "1": return "Doctor";
        case "2": return "Business";
        case "3": return "Carrer guidance";
        case "4": return "Others";
    }
};