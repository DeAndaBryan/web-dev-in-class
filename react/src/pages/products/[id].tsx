import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <h1 className="title">Product #{router.query.id}</h1>
    )
}
