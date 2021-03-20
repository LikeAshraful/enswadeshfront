<template>
  <div>
    <p class="title">Personal Information</p>
    <div class="p-4 bg-white">
      <label for="name" class="input-label">Name</label>
      <form @submit.prevent="changeName">
        <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
          <div>
            <input
              type="text"
              id="name"
              v-model="user.name"
              class="input-field focus:outline-none"
              placeholder="Adam"
            />
          </div>
          <div>
            <button
              type="submit"
              class="focus:outline-none font-bold text-blue-1"
            >
              Change name
            </button>
          </div>
        </div>
      </form>
      <label for="phone" class="input-label">Mobile phone number</label>
      <form @submit.prevent="changePhoneNumber">
        <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
          <div>
            <input
              type="text"
              id="phone_number"
              v-model="user.phone_number"
              class="input-field focus:outline-none"
              placeholder="01XXXXXXXXX"
            />
          </div>
          <div>
            <button
              type="submit"
              class="focus:outline-none font-bold text-blue-1"
            >
              Change phone number
            </button>
          </div>
        </div>
      </form>
      <label for="blood_group" class="input-label">Blood Group</label>
      <form @submit.prevent="changeBloodGroup">
        <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
          <div>
            <input
              type="text"
              id="blood_group"
              v-model="blood_group"
              class="input-field focus:outline-none"
              placeholder="AB+"
            />
          </div>
          <div>
            <button
              type="submit"
              class="focus:outline-none font-bold text-blue-1"
            >
              Change blood group
            </button>
          </div>
        </div>
      </form>
      <label for="dob" class="input-label">Date of birth</label>
      <form @submit.prevent="changeDateOfBirth">
        <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
          <div>
            <input
              type="date"
              id="dob"
              v-model="dob"
              class="input-field focus:outline-none"
              placeholder="16/08/1994"
            />
          </div>
          <div>
            <button
              type="submit"
              class="focus:outline-none font-bold text-blue-1"
            >
              Change date of birth
            </button>
          </div>
        </div>
      </form>
    </div>
    <p class="title mt-4">Profile Photo</p>
    <div class="p-4 bg-white">
      <div class="grid grid-cols-2 gap-4 items-center justify-center">
        <div>
          <img
            class="avatar"
            src="~/assets/img/default_market.png"
            alt="Image"
          />
        </div>
        <div>
          <button class="focus:outline-none font-bold text-blue-1">
            Change photo
          </button>
        </div>
      </div>
    </div>
    <form @submit.prevent="changeProfile">
      <div
        class="grid grid-cols-2 gap-4 items-center justify-center title mt-4"
      >
        <div><p>Address</p></div>
        <div>
          <button
            type="submit"
            class="focus:outline-none font-bold text-blue-1"
          >
            Change address
          </button>
        </div>
      </div>
      <div class="p-4 bg-white mb-4">
        <label for="region" class="input-label">Region</label>
        <input
          type="text"
          id="region"
          class="input-field focus:outline-none mb-4"
          placeholder="Dhaka"
        />
        <label for="city" class="input-label">City</label>
        <input
          type="text"
          id="city"
          class="input-field focus:outline-none mb-4"
          placeholder="Dhaka"
        />
        <label for="area" class="input-label">Area</label>
        <input
          type="text"
          id="area"
          class="input-field focus:outline-none mb-4"
          placeholder="Shahbag"
        />
        <label for="address" class="input-label">Address</label>
        <input
          type="text"
          id="address"
          v-model="address"
          class="input-field focus:outline-none mb-4"
          placeholder="Flat#
          3B, Floor# 2nd, House#23, Road#1A"
        />
      </div>
    </form>
    <p class="title">Password</p>
    <div class="p-4 bg-white">
      <label for="name" class="input-label">Password</label>
      <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
        <div>
          <input
            type="password"
            id="name"
            class="input-field focus:outline-none"
            placeholder="*****"
          />
        </div>
        <div>
          <button class="focus:outline-none font-bold text-blue-1">
            Change password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone_number: '',
      },
      address: '',
      blood_group: '',
      dob: '',
    }
  },

  mounted() {
    this.user = this.$auth.user
    this.address = this.$auth.user.profile.address
    this.blood_group = this.$auth.user.profile.blood_group
    this.dob = this.$auth.user.profile.dob
    console.log(this.blood_group)
  },

  methods: {
    async changeName() {
      var formData = new FormData()
      formData.append('model', 'User')
      formData.append('name', this.user.name)
      this.$axios
        .post('api/user-info-update', formData)
        .then((response) => {
          this.$toast.success('User name change successfully save !')
        })
        .catch((error) => {
          this.$toast.error('Oops..!-' + error.response.data.message)
        })
    },
    async changePhoneNumber() {
      var formData = new FormData()
      formData.append('model', 'User')
      formData.append('phone_number', this.user.phone_number)
      this.$axios
        .post('api/user-info-update', formData)
        .then((response) => {
          this.$toast.success('User phone number change successfully save !')
        })
        .catch((error) => {
          this.$toast.error('Oops..!-' + error.response.data.message)
        })
    },
    async changeBloodGroup() {
      var formData = new FormData()
      formData.append('model', 'Profile')
      formData.append('blood_group', this.user.blood_group)
      this.$axios
        .post('api/user-info-update', formData)
        .then((response) => {
          this.$toast.success('User blood group change successfully save !')
        })
        .catch((error) => {
          this.$toast.error('Oops..!-' + error.response.data.message)
        })
    },
    async changeDateOfBirth() {
      var formData = new FormData()
      formData.append('model', 'Profile')
      formData.append('dob', this.dob)
      this.$axios
        .post('api/user-info-update', formData)
        .then((response) => {
          this.$toast.success('User date of birth change successfully save !')
        })
        .catch((error) => {
          this.$toast.error('Oops..!-' + error.response.data.message)
        })
    },
    async changeProfile() {
      var formData = new FormData()
      formData.append('model', 'Profile')
      formData.append('address', this.address)
      this.$axios
        .post('api/user-info-update', formData)
        .then((response) => {
          this.$toast.success('User address change successfully save !')
        })
        .catch((error) => {
          this.$toast.error('Oops..!-' + error.response.data.message)
        })
    },
  },
}
</script>
