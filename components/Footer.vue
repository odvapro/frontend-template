<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__content">
				<div class="footer__info">
					<p class="footer__copyright">
						© 2025 MedPulse. Все права защищены.
					</p>
					<p class="footer__description">
						Актуальные медицинские новости и исследования
					</p>
				</div>
				
				<div class="footer__links">
					<NuxtLink to="/about" class="footer__link">О нас</NuxtLink>
					<NuxtLink to="/contact" class="footer__link">Контакты</NuxtLink>
					<NuxtLink to="/privacy" class="footer__link">Политика конфиденциальности</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="scss" scoped>
	.footer
	{
		background-color: #F5F5F5;
		border-top: 1px solid #E0E0E0;
		padding: 30px 0;
		margin-top: 40px;
	}
	
	.footer__content
	{
		padding: 0 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.footer__info
	{
		flex: 1;
	}
	
	.footer__copyright
	{
		font-family: 'Helvetica', sans-serif;
		font-size: 14px;
		color: #767676;
		margin: 0 0 5px 0;
	}
	
	.footer__description
	{
		font-family: 'Helvetica', sans-serif;
		font-size: 12px;
		color: #999999;
		margin: 0;
	}
	
	.footer__links
	{
		display: flex;
		gap: 20px;
	}
	
	.footer__link
	{
		font-family: 'Helvetica', sans-serif;
		font-size: 14px;
		color: #767676;
		text-decoration: none;
		transition: color 0.3s ease;
		
		&:hover
		{
			color: #282C34;
		}
	}
</style>
