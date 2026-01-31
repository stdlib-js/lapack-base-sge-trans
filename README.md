<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sgetrans

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a matrix from row-major layout to column-major layout or vice versa.



<section class="usage">

## Usage

```javascript
import sgetrans from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-sge-trans@v0.1.0-esm/index.mjs';
```

#### sgetrans( order, M, N, A, LDA, out, LDO )

Converts a matrix from row-major layout to column-major layout or vice versa.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Float32Array( 6 );

out = sgetrans( 'row-major', 2, 3, A, 3, out, 2 );
// returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float32Array`][mdn-float32array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **out**: output [`Float32Array`][mdn-float32array].
-   **LDO**: stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial arrays...
var A0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
var out0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

// Create offset views...
var A1 = new Float32Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float32Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sgetrans( 'row-major', 2, 2, A1, 2, out1, 2 );
// out0 => <Float32Array>[ 0.0, 1.0, 3.0, 2.0, 4.0 ]
```

#### sgetrans.ndarray( M, N, A, sa1, sa2, oa, out, so1, so2, oo )

Converts a matrix from row-major layout to column-major layout or vice versa using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Float32Array( 6 );

out = sgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
// returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float32Array`][mdn-float32array].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **out**: output [`Float32Array`][mdn-float32array].
-   **so1**: stride of the first dimension of `out`.
-   **so2**: stride of the second dimension of `out`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
var out = new Float32Array( [ 0.0, 0.0, 11.0, 312.0, 53.0, 412.0 ] );

sgetrans.ndarray( 2, 2, A, 2, 1, 1, out, 2, 1, 2 );
// out => <Float32Array>[ 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sgetrans()` corresponds to the [LAPACK][lapack] utility routine [`sge_trans`][lapack-sge-trans].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@esm/index.mjs';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs';
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import sgetrans from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-sge-trans@v0.1.0-esm/index.mjs';

var shapeA = [ 2, 3 ];
var shapeOut = [ 3, 2 ];

// Row-major layout...
var order = 'row-major';

var stridesA = shape2strides( shapeA, order );
var stridesOut = shape2strides( shapeOut, order );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, order ) );

var out = new Float32Array( numel( shapeA ) );

out = sgetrans( order, shapeA[0], shapeA[1], A, stridesA[0], out, stridesOut[0] );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, order ) );

// Column-major layout...
order = 'column-major';

stridesA = shape2strides( shapeA, order );
stridesOut = shape2strides( shapeOut, order );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, order ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans( order, shapeA[0], shapeA[1], A, stridesA[1], out, stridesOut[1] );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, order ) );

// Input and output arrays have different layouts...
stridesA = shape2strides( shapeA, 'row-major' );
stridesOut = shape2strides( shapeOut, 'column-major' );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, 'row-major' ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans.ndarray( shapeA[0], shapeA[1], A, stridesA[0], stridesA[1], 0, out, stridesOut[0], stridesOut[1], 0 );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, 'column-major' ) );

// Input and output arrays have different layouts...
stridesA = shape2strides( shapeA, 'column-major' );
stridesOut = shape2strides( shapeOut, 'row-major' );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, 'column-major' ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans.ndarray( shapeA[0], shapeA[1], A, stridesA[0], stridesA[1], 0, out, stridesOut[0], stridesOut[1], 0 );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, 'row-major' ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-sge-trans.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-sge-trans

[test-image]: https://github.com/stdlib-js/lapack-base-sge-trans/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/lapack-base-sge-trans/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-sge-trans/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-sge-trans?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-sge-trans.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-sge-trans/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-sge-trans/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-sge-trans/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-sge-trans/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-sge-trans/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-sge-trans/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-sge-trans/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-sge-trans/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-sge-trans/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-sge-trans]: https://github.com/OpenMathLib/OpenBLAS/blob/develop/lapack-netlib/LAPACKE/utils/lapacke_sge_trans.c

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
