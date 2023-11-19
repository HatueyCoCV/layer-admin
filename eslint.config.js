import antfu from "@antfu/eslint-config"

export default antfu({
  rules: {
    "vue/multiword-component-names": "off",
    "style/quotes": "off",
    "style/comma-dangle": "off",
    "node/prefer-global/process": "off",
  },
})
