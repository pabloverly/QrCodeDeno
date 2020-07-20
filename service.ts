import { serve } from 'http://deno.land/std/http/server.ts'
import { qrcode} from 'http://deno.land/x/qrcode/mod.ts'

const server = serve ({ port:8004 });

let base64 = await qrcode('http://simbiosecode.tech',{
	size:300
})


console.log('Server=> http://localhost:8004');

for await (const req of server){
req.respond({
	headers: new Headers({
		'Content-Type': 'text/html'
	}),

	body: `
		<div style="display: flex; justify-content: center;  margin-top: 30px;">
			<img src="${base64}" />
		</div>
	`

});
}
