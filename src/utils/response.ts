export class Response<T = null> {
    constructor(
        public data: T | null, // Permitir `null`
        public status: 'success' | 'error',
        public message: string,
        public totalUsers?: number, // Campo opcional
        public totalPages?: number, // Campo opcional
        public currentPage?: number, // Campo opcional
        public pageSize?: number // Campo opcional
    ) { }
}
