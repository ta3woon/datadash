import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ProductsCatalog from './ProductsCatalog'

class ProductsCatalogPage extends React.Component {
  static defaultProps = {
    pathName: 'Products Catalog',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Products Catalog" />
        <ProductsCatalog />
      </Page>
    )
  }
}

export default ProductsCatalogPage
