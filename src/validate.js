export default function validate(data, rules) {
  let errors = {}
  rules.forEach((rule)=> {
    let value = data[rule.key]
    if(rule.required) {
      let error = validate.required(value)
      if(error) {
        ensureObject(errors, rule.key)
        errors[rule.key].required = error
        return
      }
    }

    let validators = Object.keys(rule).filter(key => (key !== 'key') && (key !== 'required'))
    // 遍历 vali dators, 并逐一调用对应的函数
    validators.forEach((validatorKey) => {
      // key is pattern / minLength / maxLength / hasNumber string
      if(validate[validatorKey]) {
        let error = validate[validatorKey](value, rule[validatorKey])
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key][validatorKey] = error
        }
      } else {
        throw `不存在的校验器: ${validatorKey}`
      }
    })
  })
  return errors
}

validate.required = (value) => {
  if(value !==0 && !value) {
    return '必填'
  }
}

validate.pattern = (value, pattern) => {
  if(pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if (pattern.test(value) === false) {
    return '格式不正确'
  }
}

validate.minLength = (value, minLength) => {
  if (value.length < minLength) {
    return '太短'
  }
}

validate.maxLength = (value, maxLength) => {
  if (value.length > maxLength) {
    return '太长'
  }
}

function ensureObject(obj, key) {
  if(typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}
