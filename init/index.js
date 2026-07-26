    const mongoose = require('mongoose');
    const initData = require('./data');
    const Listing = require('../model/listing.js')

                    const Mongo_url = process.env.

                    main()
                        .then(() => {
                                     console.log("Connection Successfull");
                        })
                        .catch((err) => console.log(err));

                    async function main() {
                        await mongoose.connect(Mongo_url);
                    }

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: '6a2c1756e01edd60aa3715d5'}))
        await Listing.insertMany(initData.data)
        console.log("Intitalized successful");
        
    }

    initDB();