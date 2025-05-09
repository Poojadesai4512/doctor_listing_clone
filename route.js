export async function GET() {
    const doctors = [
      { id: 1, name: "Dr. John Doe", specialty: "Cardiologist" },
      { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist" },
    ];
  
    return new Response(
      JSON.stringify({
        total: doctors.length,
        page: 1,
        limit: 10,
        doctors,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  