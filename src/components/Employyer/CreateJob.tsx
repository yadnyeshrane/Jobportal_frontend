import React from "react";
import Header from "../Header";
import Topbar from "../Topbar";
import { useFormik } from "formik";
import * as Yup from "yup";
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
    compnayname: Yup.string().required("Company name should not be empty!"),
    adressline_1: Yup.string().required("Adress field cannot be empty"),
    adressline_2: Yup.string(),
    state: Yup.string().required("State  should not be empty!"),
    postcode: Yup.string().required("Postcode  should not be empty!"),
    companyemail: Yup.string().email("Invalid email format!"),
    comapny_mob: Yup.string().matches(phoneRegExp, "Phone number is not valid")
        .length(10, "mobile number should be 10 charecters long")
        .required("Mobile Number should not be empty!"),
        comapny_aletrmob:Yup.string(),
        position:Yup.string().required("Position field should not be empty!")   ,
        vacany: Yup.string().required("Vacany, field should not be empty!"),
        min_exp:Yup.string().required("Minimum experience field should not be empty!"),
        max_exp:Yup.string().required("Maximum experience field should not be empty!"),
        min_salary:Yup.string().required("Maximum salary field should not be empty!"),
        max_salary:Yup.string().required("Maximum salary field should not be empty!"),
    //     .required("Email should not be empty!")
    // surname: Yup.string().required("Lastname should not be empty!"),
    // mobileno: Yup.string()
    //     .matches(phoneRegExp, "Phone number is not valid")
    //     .length(10, "mobile number should be 10 charecters long")
    //     .required("Mobile Number should not be empty!"),
    // email: Yup.string()
    //     .email("Invalid email format!")
    //     .required("Email should not be empty!"),
    // password: Yup.string()
    //     .min(8, "Password should be atleast 8 characters long!")
    //     .required("Password should not be empty!"),
    // confirm_password: Yup.string()
    //     .oneOf([Yup.ref("password")], "Password's not match!")
    //     .required("Required!"),
});
function CreateJob() {
    const formik = useFormik({
        initialValues: {
            compnayname: "",
            adressline_1: "",
            adressline_2: "",
            state: "",
            postcode: "",
            companyemail: "",
            comapny_mob:"",
            comapny_aletrmob:"",
            position:"",
            vacany:"",
            min_exp:"",
        max_exp:"",
        min_salary:"",
        max_salary:""
            // surname: "",
            // mobileno: "",
            // email: "",
            // password: "",
            // confirm_password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            //  handleSignup(values);
        },
    });
    return (
        <>
            <Topbar></Topbar>
            <Header></Header>

            <div className="container mt-3">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row jumbotron box8">
                        <div className="col-sm-12 mx-t3 mb-4">
                            <h2 className="text-center text-info">Register</h2>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name-f">Job Category</label>
                            <select className="form-control">
                                <option>Select</option>
                                <option>It jobs</option>
                                <option>Hr(Human Resources)</option>
                                <option>Marketing</option>
                            </select>
                        </div>
                        <div className="col-sm-6 "></div>
                        <div className="col-sm-6 form-group mt-4">
                            <label htmlFor="compnayname">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="compnayname"
                                id="compnayname"
                                placeholder="Enter your Company Name."
                                value={formik.values.compnayname}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.compnayname &&
                                formik.touched.compnayname && (
                                    <p className="error-msg">
                                        {formik.errors.compnayname}
                                    </p>
                                )}
                        </div>
                        <div className="col-sm-6 form-group"></div>
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <div className=" form-group">
                                    <label htmlFor="address-1">
                                        Address Line-1
                                    </label>
                                    <input
                                        type="address"
                                        className="form-control"
                                        name="adressline_1"
                                        id="adressline_1"
                                        placeholder="Locality/House/Street no."
                                        value={formik.values.adressline_1}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.adressline_1 &&
                                        formik.touched.adressline_1 && (
                                            <p className="error-msg">
                                                {formik.errors.adressline_1}
                                            </p>
                                        )}
                                </div>

                                <div className=" form-group">
                                    <label htmlFor="address-2">
                                        Address Line-2
                                    </label>
                                    <input
                                        type="address"
                                        className="form-control"
                                        name="adressline_2"
                                        id="address-2"
                                        placeholder="Village/City Name."
                                        value={formik.values.adressline_2}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-5 form-group">
                                        <label htmlFor="State">State</label>
                                        <input
                                            type="address"
                                            className="form-control"
                                            name="state"
                                            id="state"
                                            placeholder="Enter your state name."
                                            value={formik.values.state}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.state &&
                                            formik.touched.state && (
                                                <p className="error-msg">
                                                    {formik.errors.state}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-sm-4 form-group">
                                        <label htmlFor="Country">Country</label>
                                        <select className="form-control custom-select browser-default">
                                            <option value="Afghanistan">
                                                Afghanistan
                                            </option>
                                            <option value="Åland Islands">
                                                Åland Islands
                                            </option>
                                            <option value="Albania">
                                                Albania
                                            </option>
                                            <option value="Algeria">
                                                Algeria
                                            </option>
                                            <option value="American Samoa">
                                                American Samoa
                                            </option>
                                            <option value="Andorra">
                                                Andorra
                                            </option>
                                            <option value="Angola">
                                                Angola
                                            </option>
                                            <option value="Anguilla">
                                                Anguilla
                                            </option>
                                            <option value="Antarctica">
                                                Antarctica
                                            </option>
                                            <option value="Antigua and Barbuda">
                                                Antigua and Barbuda
                                            </option>
                                            <option value="Argentina">
                                                Argentina
                                            </option>
                                            <option value="Armenia">
                                                Armenia
                                            </option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">
                                                Australia
                                            </option>
                                            <option value="Austria">
                                                Austria
                                            </option>
                                            <option value="Azerbaijan">
                                                Azerbaijan
                                            </option>
                                            <option value="Bahamas">
                                                Bahamas
                                            </option>
                                            <option value="Bahrain">
                                                Bahrain
                                            </option>
                                            <option value="Bangladesh">
                                                Bangladesh
                                            </option>
                                            <option value="Barbados">
                                                Barbados
                                            </option>
                                            <option value="Belarus">
                                                Belarus
                                            </option>
                                            <option value="Belgium">
                                                Belgium
                                            </option>
                                            <option value="Belize">
                                                Belize
                                            </option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">
                                                Bermuda
                                            </option>
                                            <option value="Bhutan">
                                                Bhutan
                                            </option>
                                            <option value="Bolivia">
                                                Bolivia
                                            </option>
                                            <option value="Bosnia and Herzegovina">
                                                Bosnia and Herzegovina
                                            </option>
                                            <option value="Botswana">
                                                Botswana
                                            </option>
                                            <option value="Bouvet Island">
                                                Bouvet Island
                                            </option>
                                            <option value="Brazil">
                                                Brazil
                                            </option>
                                            <option value="British Indian Ocean Territory">
                                                British Indian Ocean Territory
                                            </option>
                                            <option value="Brunei Darussalam">
                                                Brunei Darussalam
                                            </option>
                                            <option value="Bulgaria">
                                                Bulgaria
                                            </option>
                                            <option value="Burkina Faso">
                                                Burkina Faso
                                            </option>
                                            <option value="Burundi">
                                                Burundi
                                            </option>
                                            <option value="Cambodia">
                                                Cambodia
                                            </option>
                                            <option value="Cameroon">
                                                Cameroon
                                            </option>
                                            <option value="Canada">
                                                Canada
                                            </option>
                                            <option value="Cape Verde">
                                                Cape Verde
                                            </option>
                                            <option value="Cayman Islands">
                                                Cayman Islands
                                            </option>
                                            <option value="Central African Republic">
                                                Central African Republic
                                            </option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">
                                                Christmas Island
                                            </option>
                                            <option value="Cocos (Keeling) Islands">
                                                Cocos (Keeling) Islands
                                            </option>
                                            <option value="Colombia">
                                                Colombia
                                            </option>
                                            <option value="Comoros">
                                                Comoros
                                            </option>
                                            <option value="Congo">Congo</option>
                                            <option value="Congo, The Democratic Republic of The">
                                                Congo, The Democratic Republic
                                                of The
                                            </option>
                                            <option value="Cook Islands">
                                                Cook Islands
                                            </option>
                                            <option value="Costa Rica">
                                                Costa Rica
                                            </option>
                                            <option value="Cote D'ivoire">
                                                Cote D'ivoire
                                            </option>
                                            <option value="Croatia">
                                                Croatia
                                            </option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Cyprus">
                                                Cyprus
                                            </option>
                                            <option value="Czech Republic">
                                                Czech Republic
                                            </option>
                                            <option value="Denmark">
                                                Denmark
                                            </option>
                                            <option value="Djibouti">
                                                Djibouti
                                            </option>
                                            <option value="Dominica">
                                                Dominica
                                            </option>
                                            <option value="Dominican Republic">
                                                Dominican Republic
                                            </option>
                                            <option value="Ecuador">
                                                Ecuador
                                            </option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">
                                                El Salvador
                                            </option>
                                            <option value="Equatorial Guinea">
                                                Equatorial Guinea
                                            </option>
                                            <option value="Eritrea">
                                                Eritrea
                                            </option>
                                            <option value="Estonia">
                                                Estonia
                                            </option>
                                            <option value="Ethiopia">
                                                Ethiopia
                                            </option>
                                            <option value="Falkland Islands (Malvinas)">
                                                Falkland Islands (Malvinas)
                                            </option>
                                            <option value="Faroe Islands">
                                                Faroe Islands
                                            </option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">
                                                Finland
                                            </option>
                                            <option value="France">
                                                France
                                            </option>
                                            <option value="French Guiana">
                                                French Guiana
                                            </option>
                                            <option value="French Polynesia">
                                                French Polynesia
                                            </option>
                                            <option value="French Southern Territories">
                                                French Southern Territories
                                            </option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">
                                                Gambia
                                            </option>
                                            <option value="Georgia">
                                                Georgia
                                            </option>
                                            <option value="Germany">
                                                Germany
                                            </option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">
                                                Gibraltar
                                            </option>
                                            <option value="Greece">
                                                Greece
                                            </option>
                                            <option value="Greenland">
                                                Greenland
                                            </option>
                                            <option value="Grenada">
                                                Grenada
                                            </option>
                                            <option value="Guadeloupe">
                                                Guadeloupe
                                            </option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">
                                                Guatemala
                                            </option>
                                            <option value="Guernsey">
                                                Guernsey
                                            </option>
                                            <option value="Guinea">
                                                Guinea
                                            </option>
                                            <option value="Guinea-bissau">
                                                Guinea-bissau
                                            </option>
                                            <option value="Guyana">
                                                Guyana
                                            </option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Heard Island and Mcdonald Islands">
                                                Heard Island and Mcdonald
                                                Islands
                                            </option>
                                            <option value="Holy See (Vatican City State)">
                                                Holy See (Vatican City State)
                                            </option>
                                            <option value="Honduras">
                                                Honduras
                                            </option>
                                            <option value="Hong Kong">
                                                Hong Kong
                                            </option>
                                            <option value="Hungary">
                                                Hungary
                                            </option>
                                            <option value="Iceland">
                                                Iceland
                                            </option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">
                                                Indonesia
                                            </option>
                                            <option value="Iran, Islamic Republic of">
                                                Iran, Islamic Republic of
                                            </option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">
                                                Ireland
                                            </option>
                                            <option value="Isle of Man">
                                                Isle of Man
                                            </option>
                                            <option value="Israel">
                                                Israel
                                            </option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">
                                                Jamaica
                                            </option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jersey">
                                                Jersey
                                            </option>
                                            <option value="Jordan">
                                                Jordan
                                            </option>
                                            <option value="Kazakhstan">
                                                Kazakhstan
                                            </option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">
                                                Kiribati
                                            </option>
                                            <option value="Korea, Democratic People's Republic of">
                                                Korea, Democratic People's
                                                Republic of
                                            </option>
                                            <option value="Korea, Republic of">
                                                Korea, Republic of
                                            </option>
                                            <option value="Kuwait">
                                                Kuwait
                                            </option>
                                            <option value="Kyrgyzstan">
                                                Kyrgyzstan
                                            </option>
                                            <option value="Lao People's Democratic Republic">
                                                Lao People's Democratic Republic
                                            </option>
                                            <option value="Latvia">
                                                Latvia
                                            </option>
                                            <option value="Lebanon">
                                                Lebanon
                                            </option>
                                            <option value="Lesotho">
                                                Lesotho
                                            </option>
                                            <option value="Liberia">
                                                Liberia
                                            </option>
                                            <option value="Libyan Arab Jamahiriya">
                                                Libyan Arab Jamahiriya
                                            </option>
                                            <option value="Liechtenstein">
                                                Liechtenstein
                                            </option>
                                            <option value="Lithuania">
                                                Lithuania
                                            </option>
                                            <option value="Luxembourg">
                                                Luxembourg
                                            </option>
                                            <option value="Macao">Macao</option>
                                            <option value="Macedonia, The Former Yugoslav Republic of">
                                                Macedonia, The Former Yugoslav
                                                Republic of
                                            </option>
                                            <option value="Madagascar">
                                                Madagascar
                                            </option>
                                            <option value="Malawi">
                                                Malawi
                                            </option>
                                            <option value="Malaysia">
                                                Malaysia
                                            </option>
                                            <option value="Maldives">
                                                Maldives
                                            </option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">
                                                Marshall Islands
                                            </option>
                                            <option value="Martinique">
                                                Martinique
                                            </option>
                                            <option value="Mauritania">
                                                Mauritania
                                            </option>
                                            <option value="Mauritius">
                                                Mauritius
                                            </option>
                                            <option value="Mayotte">
                                                Mayotte
                                            </option>
                                            <option value="Mexico">
                                                Mexico
                                            </option>
                                            <option value="Micronesia, Federated States of">
                                                Micronesia, Federated States of
                                            </option>
                                            <option value="Moldova, Republic of">
                                                Moldova, Republic of
                                            </option>
                                            <option value="Monaco">
                                                Monaco
                                            </option>
                                            <option value="Mongolia">
                                                Mongolia
                                            </option>
                                            <option value="Montenegro">
                                                Montenegro
                                            </option>
                                            <option value="Montserrat">
                                                Montserrat
                                            </option>
                                            <option value="Morocco">
                                                Morocco
                                            </option>
                                            <option value="Mozambique">
                                                Mozambique
                                            </option>
                                            <option value="Myanmar">
                                                Myanmar
                                            </option>
                                            <option value="Namibia">
                                                Namibia
                                            </option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">
                                                Netherlands
                                            </option>
                                            <option value="Netherlands Antilles">
                                                Netherlands Antilles
                                            </option>
                                            <option value="New Caledonia">
                                                New Caledonia
                                            </option>
                                            <option value="New Zealand">
                                                New Zealand
                                            </option>
                                            <option value="Nicaragua">
                                                Nicaragua
                                            </option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">
                                                Nigeria
                                            </option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">
                                                Norfolk Island
                                            </option>
                                            <option value="Northern Mariana Islands">
                                                Northern Mariana Islands
                                            </option>
                                            <option value="Norway">
                                                Norway
                                            </option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">
                                                Pakistan
                                            </option>
                                            <option value="Palau">Palau</option>
                                            <option value="Palestinian Territory, Occupied">
                                                Palestinian Territory, Occupied
                                            </option>
                                            <option value="Panama">
                                                Panama
                                            </option>
                                            <option value="Papua New Guinea">
                                                Papua New Guinea
                                            </option>
                                            <option value="Paraguay">
                                                Paraguay
                                            </option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">
                                                Philippines
                                            </option>
                                            <option value="Pitcairn">
                                                Pitcairn
                                            </option>
                                            <option value="Poland">
                                                Poland
                                            </option>
                                            <option value="Portugal">
                                                Portugal
                                            </option>
                                            <option value="Puerto Rico">
                                                Puerto Rico
                                            </option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Reunion">
                                                Reunion
                                            </option>
                                            <option value="Romania">
                                                Romania
                                            </option>
                                            <option value="Russian Federation">
                                                Russian Federation
                                            </option>
                                            <option value="Rwanda">
                                                Rwanda
                                            </option>
                                            <option value="Saint Helena">
                                                Saint Helena
                                            </option>
                                            <option value="Saint Kitts and Nevis">
                                                Saint Kitts and Nevis
                                            </option>
                                            <option value="Saint Lucia">
                                                Saint Lucia
                                            </option>
                                            <option value="Saint Pierre and Miquelon">
                                                Saint Pierre and Miquelon
                                            </option>
                                            <option value="Saint Vincent and The Grenadines">
                                                Saint Vincent and The Grenadines
                                            </option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">
                                                San Marino
                                            </option>
                                            <option value="Sao Tome and Principe">
                                                Sao Tome and Principe
                                            </option>
                                            <option value="Saudi Arabia">
                                                Saudi Arabia
                                            </option>
                                            <option value="Senegal">
                                                Senegal
                                            </option>
                                            <option value="Serbia">
                                                Serbia
                                            </option>
                                            <option value="Seychelles">
                                                Seychelles
                                            </option>
                                            <option value="Sierra Leone">
                                                Sierra Leone
                                            </option>
                                            <option value="Singapore">
                                                Singapore
                                            </option>
                                            <option value="Slovakia">
                                                Slovakia
                                            </option>
                                            <option value="Slovenia">
                                                Slovenia
                                            </option>
                                            <option value="Solomon Islands">
                                                Solomon Islands
                                            </option>
                                            <option value="Somalia">
                                                Somalia
                                            </option>
                                            <option value="South Africa">
                                                South Africa
                                            </option>
                                            <option value="South Georgia and The South Sandwich Islands">
                                                South Georgia and The South
                                                Sandwich Islands
                                            </option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">
                                                Sri Lanka
                                            </option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">
                                                Suriname
                                            </option>
                                            <option value="Svalbard and Jan Mayen">
                                                Svalbard and Jan Mayen
                                            </option>
                                            <option value="Swaziland">
                                                Swaziland
                                            </option>
                                            <option value="Sweden">
                                                Sweden
                                            </option>
                                            <option value="Switzerland">
                                                Switzerland
                                            </option>
                                            <option value="Syrian Arab Republic">
                                                Syrian Arab Republic
                                            </option>
                                            <option value="Taiwan, Province of China">
                                                Taiwan, Province of China
                                            </option>
                                            <option value="Tajikistan">
                                                Tajikistan
                                            </option>
                                            <option value="Tanzania, United Republic of">
                                                Tanzania, United Republic of
                                            </option>
                                            <option value="Thailand">
                                                Thailand
                                            </option>
                                            <option value="Timor-leste">
                                                Timor-leste
                                            </option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">
                                                Tokelau
                                            </option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">
                                                Trinidad and Tobago
                                            </option>
                                            <option value="Tunisia">
                                                Tunisia
                                            </option>
                                            <option value="Turkey">
                                                Turkey
                                            </option>
                                            <option value="Turkmenistan">
                                                Turkmenistan
                                            </option>
                                            <option value="Turks and Caicos Islands">
                                                Turks and Caicos Islands
                                            </option>
                                            <option value="Tuvalu">
                                                Tuvalu
                                            </option>
                                            <option value="Uganda">
                                                Uganda
                                            </option>
                                            <option value="Ukraine">
                                                Ukraine
                                            </option>
                                            <option value="United Arab Emirates">
                                                United Arab Emirates
                                            </option>
                                            <option value="United Kingdom">
                                                United Kingdom
                                            </option>
                                            <option value="United States">
                                                United States
                                            </option>
                                            <option value="United States Minor Outlying Islands">
                                                United States Minor Outlying
                                                Islands
                                            </option>
                                            <option value="Uruguay">
                                                Uruguay
                                            </option>
                                            <option value="Uzbekistan">
                                                Uzbekistan
                                            </option>
                                            <option value="Vanuatu">
                                                Vanuatu
                                            </option>
                                            <option value="Venezuela">
                                                Venezuela
                                            </option>
                                            <option value="Viet Nam">
                                                Viet Nam
                                            </option>
                                            <option value="Virgin Islands, British">
                                                Virgin Islands, British
                                            </option>
                                            <option value="Virgin Islands, U.S.">
                                                Virgin Islands, U.S.
                                            </option>
                                            <option value="Wallis and Futuna">
                                                Wallis and Futuna
                                            </option>
                                            <option value="Western Sahara">
                                                Western Sahara
                                            </option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">
                                                Zambia
                                            </option>
                                            <option value="Zimbabwe">
                                                Zimbabwe
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="postcode">
                                            Postal-Code
                                        </label>
                                        <input
                                            type="Zip"
                                            className="form-control"
                                            name="postcode"
                                            id="postcode"
                                            placeholder="Postal-Code."
                                            value={formik.values.postcode}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.postcode &&
                                            formik.touched.postcode && (
                                                <p className="error-msg">
                                                    {formik.errors.postcode}
                                                </p>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 form-group">
                                <div className=" form-group">
                                    <label htmlFor="companyemail">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="companyemail"
                                        id="companyemail"
                                        placeholder="Company Email"
                                        value={formik.values.companyemail}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.companyemail &&
                                        formik.touched.companyemail && (
                                            <p className="error-msg">
                                                {formik.errors.companyemail}
                                            </p>
                                        )}
                                </div>

                                <div className=" form-group">
                                    <label htmlFor="comapny_mob">Mobile</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="comapny_mob"
                                        id="comapny_mob"
                                        placeholder="Mobile No"
                                        maxLength={10}
                                        value={formik.values.comapny_mob}
                                        onChange={formik.handleChange}
                                    />
                                     {formik.errors.comapny_mob &&
                                        formik.touched.comapny_mob && (
                                            <p className="error-msg">
                                                {formik.errors.comapny_mob}
                                            </p>
                                        )}
                                </div>
                                <div className=" form-group">
                                    <label htmlFor="comapny_aletrmob">
                                        Alternate Mobile
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="comapny_aletrmob"
                                        id="comapny_aletrmob"
                                        placeholder="Alternate Mobile"
                                        maxLength={10}
                                        value={formik.values.comapny_aletrmob}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="job_details " className="mt-5">
                            <div className=" col-sm-6 form-group">
                                <label htmlFor="position">
                                    Job Position
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="position"
                                    id="position"
                                    placeholder="Job Position"
                                    value={formik.values.position}
                                    onChange={formik.handleChange}
                                />
                                   {formik.errors.position &&
                                        formik.touched.position && (
                                            <p className="error-msg">
                                                {formik.errors.position}
                                            </p>
                                        )}
                            </div>

                            <div className="row">
                                <div className=" col-sm-6 form-group">
                                    <label htmlFor="job_position">
                                        Mode of job
                                    </label>
                                    <div className="d-flex">
                                        <div className="form-check col-sm-4 ">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label className="form-check-label">
                                                Full Time
                                            </label>
                                        </div>
                                        <div className="form-check col-sm-4">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label className="form-check-label">
                                                Part Time
                                            </label>
                                        </div>
                                        <div className="form-check col-sm-4">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label className="form-check-label">
                                                Intern
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="vacany">No of vacany</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="vacany"
                                        id="vacany"
                                        placeholder="Number of Vacany"
                                        value={formik.values.vacany}
                                        onChange={formik.handleChange}
                                    />
                                     {formik.errors.vacany &&
                                        formik.touched.vacany && (
                                            <p className="error-msg">
                                                {formik.errors.vacany}
                                            </p>
                                        )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="vacany">Experience</label>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="min_exp">Min</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="min_exp"
                                                id="min_exp"
                                                placeholder="Minimum Experience"
                                                value={formik.values.min_exp}
                                                onChange={formik.handleChange}
                                            />
                                               {formik.errors.min_exp &&
                                        formik.touched.min_exp && (
                                            <p className="error-msg">
                                                {formik.errors.min_exp}
                                            </p>
                                        )}
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="max_exp">Max</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="max_exp"
                                                id="max_exp"
                                                placeholder="Number of max_exp"
                                                value={formik.values.max_exp}
                                                onChange={formik.handleChange}
                                            />
                                             {formik.errors.max_exp &&
                                        formik.touched.max_exp && (
                                            <p className="error-msg">
                                                {formik.errors.max_exp}
                                            </p>
                                        )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="vacany">Salary</label>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="min_salary">
                                                Min
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="min_salary"
                                                id="min_salary"
                                                placeholder="Number of min_salary"
                                                value={formik.values.min_salary}
                                                onChange={formik.handleChange}
                                            />
                                             {formik.errors.min_salary &&
                                        formik.touched.min_salary && (
                                            <p className="error-msg">
                                                {formik.errors.min_salary}
                                            </p>
                                        )}
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="max_salary">
                                                Max
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="max_salary"
                                                id="max_salary"
                                                placeholder="Number of max_salary"
                                                value={formik.values.max_salary}
                                                onChange={formik.handleChange}
                                            />
                                             {formik.errors.max_salary &&
                                        formik.touched.max_salary && (
                                            <p className="error-msg">
                                                {formik.errors.max_salary}
                                            </p>
                                        )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                                Job Description
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                                Education Requirements
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                                Job Requirements
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                            />
                        </div>

                        <div className="col-sm-12">
                            <input
                                type="checkbox"
                                className="form-check d-inline"
                                id="chb"
                            />
                            <label htmlFor="chb" className="form-check-label">
                                &nbsp;I accept all terms and conditions.
                            </label>
                        </div>
                        <div className="col-sm-12 form-group mb-0">
                            <button className="btn btn-primary float-right">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateJob;
