export default {
name: 'IndexPage',
async asyncData({ $axios }) {
let users = [];
await $axios.$get('/api/v1/users')
.then(res => (users = res));
return { users };
},
data() {
return {};
},
computed: {
dateFormat() {
return (date) => {
const dateTimeFormat = new Intl.DateTimeFormat(
'ja', { dateStyle: 'medium', timeStyle: 'short' }
);
return dateTimeFormat.format(new Date(date));
};
    }
  }
};
