// eslint-disable-next-line no-unused-vars,no-undef
const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-09',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《Unix编程艺术》',
                date: '2006-02',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-03',
                price: 128.00,
                count: 1
            }
        ]
    }, methods: {
        getFinalPrice(price) {
            return '￥' + price.toFixed(2)
        },
        decrement(index) {
            console.log(index);
            this.books[index].count--;
        },
        increment(index) {
            console.log(index);
            this.books[index].count++;
        },
        remove(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        getSumPrice() {
            let sum = 0;
            for (let i = 0; i < this.books.length; i++) {
                sum += this.books[i].price*this.books[i].count
            }

            return sum;
        }

    }
})