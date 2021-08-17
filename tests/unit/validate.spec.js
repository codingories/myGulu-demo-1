import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import validate from "@/validate"

describe('validate', () => {
  it('存在', () => {
    expect(validate).to.exist
  })

  it('required true 报错 ', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })

  it('required true 通过 ', () => {
    let data = {
      email: 0
    }
    let rules = [
      {key: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern 报错', () => {
    let data = {
      email: '@frank.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('pattern 通过', () => {
    let data = {
      email: '1@frank.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })

  it('pattern email 报错', () => {
    let data = {
      email: '@frank.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('pattern email 通过', () => {
    let data = {
      email: '1@frank.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })

  it('require & pattern', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist

  })

  it('pattern & minLength', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', minLength: 6}
    ]
    let errors = validate(data, rules)
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.exist
  })

  it('maxLength', () => {
    let data = {
      email: '123123123123'
    }
    let rules = [
      {key: 'email', pattern: 'email', maxLength: 10}
    ]
    let errors = validate(data, rules)
    expect(errors.email.maxLength).to.exist
  })

  // it('maxLength12333', () => {
  //   let data = {
  //     email: '123123123123'
  //   }
  //   let rules = [
  //     {key: 'email', pattern: 'email', maxLength: 10}
  //   ]
  //   let errors = validate(data, rules)
  //   expect(errors.email.maxLength).to.exist
  // })


  it('many keys', ()=> {
    let data = {
      email: '12345611231267'
    }
    let rules = [
      {
        key: 'email', required: true, minLength: 5, maxLength: 10,
        hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderScore: true,
        hasFrank: true
      }
    ]
    let fn = () => {
      validate(data, rules)
    }

    expect(fn).to.throw()
  })

  it('自定义测试规则hasNumber', ()=>{
    let data = {
      email: 'abc'
    }

    validate.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }

    let rules = [
      {
        key: 'email', required: true, minLength: 5, maxLength: 10,
        hasNumber: true
      }
    ]
    let errors
    let fn = () => {
      errors = validate(data, rules)
    }

    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.exist
  })


  let demoRule = {
    key: 'xxx', required: true, minLength: 5, maxLength: 20,
    hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderScore: true,
    hasFrank: true
  }


})
