<template>
	<article class="news-card">
		<div class="news-card__content">
			<div class="news-card__number">
				<span class="news-card__number-text">{{ number }}</span>
				<div class="news-card__arrow">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M5 7L14 12L5 17V7Z" fill="black"/>
					</svg>
				</div>
			</div>
			
			<div class="news-card__info">
				<div class="news-card__header">
					<h3 class="news-card__title">{{ title }}</h3>
					<span class="news-card__source">{{ source }}</span>
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
