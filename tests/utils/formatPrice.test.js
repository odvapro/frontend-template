import formatPrice from '@/utils/formatPrice'

test('Форматировние чисел в рублях', () => {
	expect(formatPrice(1000)).toBe("1 000 ₽");
	expect(formatPrice(50000)).toBe("50 000 ₽");
	expect(formatPrice(1150000)).toBe("1 150 000 ₽");
})

test('Корреткное отоброжение нуля', () => {
	expect(formatPrice(0)).toBe("0 ₽");
})

test('Корреткное отоброжение отрицательных чисел', () => {
	expect(formatPrice(-500)).toBe("-500 ₽");
	expect(formatPrice(-50000)).toBe("-50 000 ₽");
	expect(formatPrice(-1150000)).toBe("-1 150 000 ₽");
})
