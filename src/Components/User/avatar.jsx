import Foto from '../../Media/Images/foto.png'

const Avatar = () => {
    return (
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img src={Foto} className='w-full' alt='avatar'></img>
        </div>
    )
}

export default Avatar;