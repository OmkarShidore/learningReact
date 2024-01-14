import 'bulma/css/bulma.css'
function ProfileCard({ title, handle, image, description }) {

    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-3by3">
                    <img src={image} alt="User Logo" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{title}</p>
                        <p class="subtitle is-6">{handle}</p>
                    </div>
                </div>
                <div class="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard