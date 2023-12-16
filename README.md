**Suspense**

```
<Suspense
	fallback={FallbackComponent}
>
	{children}
</Suspense>;
```

**Error Boundary**

```
<ErrorBoundary
	FallbackComponent={FallbackComponent}
	onReset={onReset}
>
	{children}
</ErrorBoundary>

interface FallbackProps {
	error,
	resetErrorBoundary
}
```

**Usage**

```
<ErrorBoundary>
	<Suspense>
		<UI />
	</Suspense>
</ErrorBoundary>
```
