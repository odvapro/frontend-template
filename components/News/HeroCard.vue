<template>
	<article class="news-hero-card">
		<div class="news-hero-card__image">
			<img :src="imageUrl" :alt="title" class="news-hero-card__img">
		</div>
		
		<div class="news-hero-card__content">
			<div class="news-hero-card__header">
				<span class="news-hero-card__source">{{ source }}</span>
				<span class="news-hero-card__date">{{ date }}</span>
			</div>
			
			<h2 class="news-hero-card__title">{{ title }}</h2>
			
			<p class="news-hero-card__description">{{ description }}</p>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'HeroCard',
		props:
		{
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
			date:
			{
				type: String,
				required: true
			},
			imageUrl:
			{
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-hero-card
	{
		position: relative;
		width: 780px;
		height: 326px;
		overflow: hidden;
	}
	
	.news-hero-card__image
	{
		position: absolute;
		top: 0;
		left: 94px;
		width: 686px;
		height: 326px;
		z-index: 1;
	}
	
	.news-hero-card__img
	{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	
	.news-hero-card__content
	{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 380px;
		height: 265px;
		background: #FFFFFF;
		border: 1px solid #000000;
		padding: 35px 21px 21px 21px;
		z-index: 2;
	}
	
	.news-hero-card__header
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
	}
	
	.news-hero-card__source
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.38em;
		color: #767676;
	}
	
	.news-hero-card__date
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.38em;
		color: #767676;
	}
	
	.news-hero-card__title
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 18px;
		line-height: 1.38em;
		color: #282C34;
		margin: 0 0 12px 0;
		width: 333px;
		height: 75px;
	}
	
	.news-hero-card__description
	{
		font-family: 'Helvetica', sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 1.38em;
		color: #282C34;
		margin: 0;
		width: 333px;
		height: 44px;
	}
</style>
