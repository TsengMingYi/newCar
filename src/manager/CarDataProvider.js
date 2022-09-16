
export default {

    allCarData : [
        {
            carId: 1,
            carName: 'BMW Z4',
            power: 0,
            images: [require('@/assets/BMW_Z4_1.jpg'),require('@/assets/BMW_Z4_2.jpg')],
        },
        {
            carId: 2,
            carName: 'McLaren GT',
            power: 0,
            images: [require('@/assets/McLaren_GT_1.jpg'),require('@/assets/McLaren_GT_2.jpg')],
        },
        {
            carId: 3,
            carName: 'Porsche 718 Cayman GTS',
            power: 0,
            images: [require('@/assets/Porsche_718_Cayman_GTS_1.jpg'),require('@/assets/Porsche_718_Cayman_GTS_2.jpg')],
        },
        {
            carId: 4,
            carName: 'Porsche 911 Carrera S',
            power: 0,
            images: [require('@/assets/Porsche_911_Carrera_S_1.jpg'),require('@/assets/Porsche_911_Carrera_S_2.jpg'),require('@/assets/Porsche_911_Carrera_S_3.jpg')],
        },

        {
            carId: 5,
            carName: 'Porsche Taycan Turbo S',
            power: 0,
            images: [require('@/assets/Porsche_Taycan_Turbo_S _1.jpg'),require('@/assets/Porsche_Taycan_Turbo_S _2.jpg')],
        },
    ],

    getCarDataById(carId) {
        return this.allCarData.find((e)=>{
            return e.carId ==  carId;
        });
    }
}
