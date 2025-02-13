import { error } from "@sveltejs/kit";

export async function GET({ request }) {
    const session = request.headers.get("cookie");

    if (!session || !session.includes("admin_session")) {
        throw error(401, "Unauthorized");
    }

    return new Response(JSON.stringify({ message: "Welcome Admin" }), {
        headers: { "Content-Type": "application/json" },
    });
}
