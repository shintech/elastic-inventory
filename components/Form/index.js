import Wrapper from './Wrapper'

const Form = ({ createNewDevice }) => {
  let _serial, _model, _manufacturer, _facility, _type
  let facilities = ['101', '102', '103', '104', '105']
  let types = ['Computer', 'Tablet', 'Phone', 'Printer']

  const submit = e => {
    e.preventDefault()

    let serial = _serial.value
    let model = _model.value
    let manufacturer = _manufacturer.value
    let facility = _facility.value
    let type = _type.value

    createNewDevice({ serial, model, manufacturer, facility, type })
  }

  /* eslint-disable */

  return (
    <Wrapper onSubmit={submit}>
      <div className='form-select'>
        <label>Facility <span className='required'>*</span></label>
        <select ref={input => _facility = input}>
          {facilities.map((f, v) => {
            return <option key={v} value={f}>{f}</option>
          })}
        </select>
      </div>

      <div className='form-select'>
        <label>Type <span className='required'>*</span></label>
        <select ref={input => _type = input}>
          {types.map((t, v) => {
            return <option key={v} value={t}>{t}</option>
          })}
        </select>
      </div>

      <div className='form-group'>
        <input ref={input => _serial = input} type='text' placeholder='Serial....' />
      </div>

      <div className='form-group'>
        <input ref={input => _model = input} type='text' placeholder='Model....' />
      </div>

      <div className='form-group'>
        <input ref={input => _manufacturer = input} type='text' placeholder='Manufacturer....' />
      </div>

      <div className='form-group'>
        <button type='button' className='close'>Close</button>
        <button type='submit' className='submit'>Submit</button>
      </div>
    </Wrapper>
  )
 /* eslint-enable */
}

export default Form
