<template>
	<article class="news-card">
		<div class="news-card__content">
			<div class="news-card__number">
				<span class="news-card__number-text">{{ number }}</span>
				<div class="news-card__arrow">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_4009_398)">
							<path d="M11.293 7.29298C11.4652 7.12081 11.6943 7.01738 11.9373 7.00209C12.1803 6.98681 12.4206 7.06073 12.613 7.20998L12.707 7.29298L18.707 13.293L18.79 13.387L18.844 13.464L18.898 13.56L18.915 13.596L18.942 13.663L18.974 13.771L18.984 13.824L18.994 13.884L18.998 13.941L19 14L18.998 14.059L18.993 14.117L18.984 14.177L18.974 14.229L18.942 14.337L18.915 14.404L18.845 14.536L18.78 14.626L18.707 14.707L18.613 14.79L18.536 14.844L18.44 14.898L18.404 14.915L18.337 14.942L18.229 14.974L18.176 14.984L18.116 14.994L18.059 14.998L18 15H5.99999C5.14799 15 4.70299 14.014 5.21699 13.377L5.29299 13.293L11.293 7.29298Z" fill="black"/>
						</g>
						<defs>
							<clipPath id="clip0_4009_398">
								<rect width="24" height="24" fill="black"/>
							</clipPath>
						</defs>
					</svg>

				</div>
			</div>
			
			<div class="news-card__info">
				<div class="news-card__header">
					<h3 class="news-card__title">{{ title }} <a href="#" class="news-card__source">{{ source }}</a></h3>
				</div>
				
				<p class="news-card__description">{{ description }}</p>
				
				<div class="news-card__meta">
					<span class="news-card__points">{{ points }} points</span>
					<span class="news-card__category">{{ category }}</span>
					<span class="news-card__date">{{ date }}</span>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'NewsCard',
		props:
		{
			number:
			{
				type: String,
				required: true
			},
			title:
			{
				type: String,
				required: true
			},
			source:
			{
				type: String,
				required: true
			},
			description:
			{
				type: String,
				required: true
			},
			points:
			{
				type: Number,
				required: true
			},
			category:
			{
				type: String,
				required: true
			},
			date:
			{
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-card
	{
		border: 1px solid rgba(0, 0, 0, 0.7);
		border-radius: 0;
		padding: 30px;
		background: #FFFFFF;
		transition: box-shadow 0.3s ease;
		
		&:hover
		{
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		}
	}
	
	.news-card__content
	{
		display: flex;
		gap: 22px;
	}
	
	.news-card__number
	{
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 24px;
		flex-shrink: 0;
	}
	
	.news-card__number-text
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 20px;
		line-height: 1.38em;
		color: #282C34;
	}
	
	.news-card__arrow
	{
		width: 24px;
		height: 24px;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.news-card__info
	{
		flex: 1;
		width: 621px;
		height: 76px;
	}
	
	.news-card__header
	{
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 5px;
	}
	
	.news-card__title
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 1.38em;
		color: #282C34;
		margin: 0;
		flex: 1;
	}
	
	.news-card__source
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.38em;
		color: #767676;
		&:hover{text-decoration: underline;}
	}
	
	.news-card__description
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 1.38em;
		color: #282C34;
		margin: 0 0 8px 0;
		width: 584px;
		height: 22px;
	}
	
	.news-card__meta
	{
		display: flex;
		gap: 10px;
		align-items: center;
	}
	
	.news-card__points,
	.news-card__category,
	.news-card__date
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.38em;
		color: #767676;
	}
</style>
