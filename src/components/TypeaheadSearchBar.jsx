import React from 'react'
import { AsyncTypeahead, Token } from 'react-bootstrap-typeahead'

export default class TypeaheadSearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.defaultSearchKey = "All"
        this.state = {
            searchKey: this.defaultSearchKey,
            filters: {},
            typeaheadOptions: []
        }
    }

    _typeaheadSearch = (q) => {
        const { searchKey } = this.state
        const option = { searchKey, label: q }
        this.setState({ typeaheadOptions: [option] })
    }

    _typeaheadChange = (options) => {
        const filters = options.reduce((result, o) => {
            result[o.searchKey] = o.label
            return result
        }, {})
        this.setState({ filters })
    }

    _typeaheadMenuItemChildren = (option, props, index) => {
        return (
            <span>{`${option.searchKey}: ${option.label}`}</span>
        )
    }

    _typeaheadToken = (option, onRemove, index) => {
        return (
            <Token key={index} onRemove={onRemove}>
                {`${option.searchKey}: ${option.label}`}
            </Token>
        )
    }

    render() {
        const { typeaheadOptions } = this.state
        return (
            <div className="TypeaheadSearchBar">
                <AsyncTypeahead multiple caseSensitive minLength={1}
                    placeholder="Type something…"
                    options={typeaheadOptions}
                    onSearch={q => this._typeaheadSearch(q)}
                    onChange={this._typeaheadChange}
                    renderMenuItemChildren={this._typeaheadMenuItemChildren}
                    renderToken={this._typeaheadToken} />
            </div>
        )
    }
}
