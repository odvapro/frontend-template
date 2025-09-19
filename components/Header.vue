<template>
	<header class="header">
		<div class="container">
			<div class="header__content">
				<!-- Логотип -->
				<div class="header__logo">
					<NuxtLink to="/" class="header__logo-link">
						<span class="header__logo-text">MedPulse</span>
					</NuxtLink>
				</div>

				<!-- Навигационное меню -->
				<nav class="header__nav">
					<ul class="header__nav-list">
						<li class="header__nav-item">
							<NuxtLink to="/pharmacy" class="header__nav-link">Фармацевтика</NuxtLink>
						</li>
						<li class="header__nav-item">
							<NuxtLink to="/surgery" class="header__nav-link">Хирургия</NuxtLink>
						</li>
						<li class="header__nav-item">
							<NuxtLink to="/cardiology" class="header__nav-link">Кардиология</NuxtLink>
						</li>
						<li class="header__nav-item">
							<NuxtLink to="/oncology" class="header__nav-link">Онкология</NuxtLink>
						</li>
						<li class="header__nav-item">
							<NuxtLink to="/technology" class="header__nav-link">Технологии</NuxtLink>
						</li>
						<li class="header__nav-item">
							<NuxtLink to="/more" class="header__nav-link">Еще</NuxtLink>
						</li>
					</ul>
				</nav>

				<!-- Мобильное меню -->
				<button class="header__mobile-toggle">
					<span class="header__mobile-line"></span>
					<span class="header__mobile-line"></span>
					<span class="header__mobile-line"></span>
				</button>
			</div>
		</div>

		<!-- Мобильное меню -->
		<div class="header__mobile-menu">
			<nav class="header__mobile-nav">
				<ul class="header__mobile-nav-list">
					<li class="header__mobile-nav-item">
						<NuxtLink to="/pharmacy" class="header__mobile-nav-link">Фармацевтика</NuxtLink>
					</li>
					<li class="header__mobile-nav-item">
						<NuxtLink to="/surgery" class="header__mobile-nav-link">Хирургия</NuxtLink>
					</li>
					<li class="header__mobile-nav-item">
						<NuxtLink to="/cardiology" class="header__mobile-nav-link">Кардиология</NuxtLink>
					</li>
					<li class="header__mobile-nav-item">
						<NuxtLink to="/oncology" class="header__mobile-nav-link">Онкология</NuxtLink>
					</li>
					<li class="header__mobile-nav-item">
						<NuxtLink to="/technology" class="header__mobile-nav-link">Технологии</NuxtLink>
					</li>
					<li class="header__mobile-nav-item">
						<NuxtLink to="/more" class="header__mobile-nav-link">Еще</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	background-color: #FFFFFF;
	position: sticky;
	top: 0;
	z-index: 100;
	margin-top: 20px;
}

.header__content{
	display: flex;
	align-items: center;
	justify-content: left;
	padding: 21px 30px;
	position: relative;
	max-width: 1180px;
	margin: 0 auto;
	height: 76px;
	border: 1px solid #000;

	@include mq($tablet) {
		padding: 21px 30px;
	}
}

.header__logo {
	flex-shrink: 0;
	margin-right: 40px;
}

.header__logo-link {
	text-decoration: none;
}

.header__logo-text {
	font-family: 'Ibarra Real Nova', serif;
	font-size: 26px;
	font-weight: 700;
	line-height: 1.25em;
	color: #282C34;
	@include transition();
}

.header__logo-text:hover {
	color: #282C34;
}

.header__nav {
	display: none;

	@include mq($tablet) {
		display: block;
	}
}

.header__nav-list {
	display: flex;
	align-items: center;
	gap: 24px;
	list-style: none;
	margin: 0;
	padding: 0;
}

.header__nav-item {
	margin: 0;
}

.header__nav-link {
	color: #282C34;
	text-decoration: none;
	font-family: 'Helvetica', sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 1.38em;
	@include transition();
}

.header__nav-link:hover {
	color: #282C34;
}

.header__nav-link.router-link-active {
	color: #282C34;
	font-weight: 400;
}


.header__mobile-toggle {
	display: flex;
	flex-direction: column;
	gap: 4px;
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;

	@include mq($tablet) {
		display: none;
	}
}

.header__mobile-line {
	width: 24px;
	height: 2px;
	background-color: $black;
	@include transition();
}

.header__mobile-menu {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: $white;
	border-bottom: 1px solid $lightGray;
	transform: translateY(-100%);
	opacity: 0;
	visibility: hidden;
	@include transition();
}

.header__mobile-nav {
	padding: 20px 16px;
}

.header__mobile-nav-list {
	list-style: none;
	margin: 0 0 20px 0;
	padding: 0;
}

.header__mobile-nav-item {
	margin-bottom: 16px;
}

.header__mobile-nav-item:last-child {
	margin-bottom: 0;
}

.header__mobile-nav-link {
	display: block;
	color: $black;
	text-decoration: none;
	font-weight: 500;
	font-size: 1.1rem;
	padding: 8px 0;
	@include transition();
}

.header__mobile-nav-link:hover {
	color: $red;
}

.header__mobile-nav-link.router-link-active {
	color: $red;
	font-weight: 600;
}

</style>
