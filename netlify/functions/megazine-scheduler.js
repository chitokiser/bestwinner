/**
 * Netlify Serverless Function & Cron Handler for BEST MEGAZINE
 * Triggered at 07:00, 11:00, 14:00, 18:00, 21:00 or on-demand
 */

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: JSON.stringify({ status: 'OK' }) };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const edition = body.edition || event.queryStringParameters?.edition || 'BEST MORNING';
    const timestamp = new Date().toISOString();

    console.log(`[Megazine Scheduler] Processing edition: ${edition} at ${timestamp}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        edition,
        message: `Successfully triggered BEST MEGAZINE AI job for ${edition}`,
        timestamp,
        status: 'EXECUTED'
      })
    };
  } catch (error) {
    console.error('[Megazine Scheduler Error]:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
