import CartContext from '../../context/CartContext'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {channel, title, id, ThumbnailUrl, publishedAt, viewCount} = details
  const {name, ProfileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardContainer bgColor={bgColor}>
              <ThumbnailImage src={ThumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <ProfileImage src={ProfileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideoDetailsText color={textColor}>{title}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>{name}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>
                    {viewCount} Views
                  </VideoDetailsText>
                  <VideoDetailsText>{publishedAt}</VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
