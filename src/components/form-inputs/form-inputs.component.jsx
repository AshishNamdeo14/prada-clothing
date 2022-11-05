import '../form-inputs/form-inputs.styles.scss'

const FormInputs = ({ label, inputOptions }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            {label ? (<label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : 'Not Available'}
        </div>
    )
}
export default FormInputs