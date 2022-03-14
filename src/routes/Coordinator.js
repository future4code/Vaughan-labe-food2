
export const goToHome = (navigate) => {
    navigate('/')
};

export const goToSignUp = (navigate) => {
    navigate('/signup')
};

export const goToLogin = (navigate) => {
    navigate('/login')
};

export const goToCreateAddress = (navigate) => {
    navigate('/createaddress')
};

export const goToRestaurantPage = (navigate, id) => {
    navigate(`/restaurant/${id}`)
};

export const goToCart = (navigate) => {
    navigate('/cart')
};

export const goToProfile = (navigate) => {
    navigate('/profile')
};

export const goToEditAddress = (navigate) => {
    navigate('/editaddress')
};

export const goToEditUser = (navigate) => {
    navigate('/edituser')
};

